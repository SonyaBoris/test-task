import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form"
import { TData } from "../../types/mocks";
import { motion } from "framer-motion"
import { opacityAnimate } from '../../ui/animate';
import "./form.css"

const BlockForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      agreement: false,
    },
    mode: "onChange",
  });

  const onSubmit = (data: TData) => {
    console.log(data);
    alert("Данные отправлены!")
  }

  return (
    <section className="block__form">
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={opacityAnimate}
          custom={.3}
          className="title">Отправь форму</motion.h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input errors={errors}
            register={register}
            name="name"
            label="Имя" />
          <Input errors={errors}
            register={register}
            name="tel"
            label="Телефон" />
          <div className="checkbox">
            <input className="checkbox__input" type="checkbox"  {...register("agreement", { required: true })} />
            <label>Cогласен, отказываюсь</label>
            {errors.agreement && <p className="desc__error-checkbox">Примите условия</p>}
          </div>
          <Button type="s">Отправить</Button>
        </form>
      </div>
    </section>
  );
}

export default BlockForm;