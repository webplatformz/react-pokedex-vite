import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = { name: string; email: string };

export function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Dr. React"
        {...register("name", {
          required: { value: true, message: "Name is required!" },
          maxLength: {
            value: 25,
            message: "The name should be shorter than 25 characters!",
          },
        })}
      />
      {errors?.name?.type && <span>{errors.name.message}</span>}
      <input
        type="text"
        placeholder="react@zuhlke.com"
        {...register("email", {
          required: { value: true, message: "The 'email' field is required!" },
          pattern: {
            value: /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email!",
          },
        })}
      />
      {errors?.email?.type && <span>{errors.email.message}</span>}
      <input type="submit" value="save" />
    </form>
  );
}
