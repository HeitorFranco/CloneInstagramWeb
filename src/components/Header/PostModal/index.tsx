import { FormHandles, SubmitHandler } from "@unform/core";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Input from "../../Input";
import * as Yup from "yup";

import { Wrapper, Container, InputBlock } from "./styles";
import api from "../../../services/api";

interface PostModalProps {
  setOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
  description: string;
  image: File;
}

const PostModal: React.FC<PostModalProps> = ({ setOpenPostModal }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required("A descrição é obrigatória"),
        image: Yup.string().required("A Imagem é obrigatória"),
      });

      await schema.validate(
        { ...data, image },
        {
          abortEarly: false,
        }
      );

      const dataToBackend = new FormData();

      dataToBackend.append("description", data.description);
      dataToBackend.append("image", image!);

      await api.post("/posts", dataToBackend);
      setOpenPostModal(false);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {} as any;
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };
  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <Wrapper>
      <Container ref={formRef} onSubmit={handleSubmit}>
        <h1>Criar Postagem</h1>
        <InputBlock hasValue={!!description}>
          <Input
            placeholder={"Descrição"}
            name="description"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            autoComplete="off"
          />
        </InputBlock>
        <input type="file" onChange={handleImage} />
        <button>Submit</button>
      </Container>
    </Wrapper>
  );
};

export default PostModal;
