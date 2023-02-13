import styled from "styled-components";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
  &:focus {
    outline: 4px solid rgba(202, 240, 248, 0.8);
    background-color: #eee;
    border-radius: 20px;
  }
`;

const Select = styled.select`
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
  &:focus {
    outline: 4px solid rgba(202, 240, 248, 0.8);
    background-color: #eee;
    border-radius: 20px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
  &:focus {
    outline: 4px solid rgba(202, 240, 248, 0.8);
    background-color: #eee;
    border-radius: 20px;
  }
`;

const Error = styled.span`
  color: tomato;
`;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form gönderiliyor");
    console.log("data", data);
  };
  return (
    <Layout title="İletişim">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">Ad:</label>
        <div>
          <Input
            {...register("fname", { required: "İsim zorunludur" })}
            type="text"
            id="fname"
            autoComplete="off"
          />
          {errors.fname && <Error>{errors.fname.message}</Error>}
        </div>

        <label htmlFor="lname">Soyad:</label>
        <div>
          <Input
            {...register("lname")}
            type="text"
            id="lname"
            name="lastname"
            autoComplete="off"
          />
        </div>

        <label htmlFor="yas">Yaş:</label>
        <div>
          <Input
            {...register("yas")}
            type="number"
            id="yas"
            name="yas"
            min="18"
            max="40"
          />
        </div>
        <div>
          <label htmlFor="text">Cinsiyet:</label>
        </div>
        <div>
          <input
            {...register("radio1")}
            type="radio"
            id="radio1"
            name="cinsiyet"
          />
          <label htmlFor="radio1">Kadın</label>
          <input
            {...register("radio2")}
            type="radio"
            id="radio2"
            name="cinsiyet"
          />
          <label htmlFor="radio2">Erkek</label>
          <input
            {...register("radio3")}
            type="radio"
            id="radio3"
            name="cinsiyet"
          />
          <label htmlFor="radio3">Belirtmek İstemiyorum</label>
        </div>

        <label type="text">Sınıf: </label>
        <div>
          <Select {...register("class")} id="class" name="sınıf">
            <option value="Sınıf"></option>
            <option value="1.sınıf">1.sınıf</option>
            <option value="2.sınıf">2.sınıf</option>
            <option value="3.sınıf">3.sınıf</option>
            <option value=".sınıf">4.sınıf</option>
            <option value="mezun">Mezun</option>
          </Select>
        </div>

        <div>
          <Textarea
            {...register("explain")}
            id="explain"
            name="explain"
            rows="8"
            cols="50"
            placeholder="Mesajınızı yazınız..."
          ></Textarea>
        </div>
        {/* <input type="file"></input> */}
        <div>
          <input type="submit" />
        </div>
      </Form>
    </Layout>
  );
};
