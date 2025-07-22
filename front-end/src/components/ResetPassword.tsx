import { Controller, useForm } from "react-hook-form";

type FormValuesType = {
  email: string;
  password: string;
};

const defaultValues: FormValuesType = {
  email: "",
  password: "",
};

const ResetPassword = () => {
  const { handleSubmit, control, reset, } = useForm<FormValuesType>({
    defaultValues,
  });

  const onSubmit = (data: FormValuesType) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 w-full bg-amber-200 rounded-md"
    >
      <h1 className="text-2xl font-bold text-center pb-4">Reset Password</h1>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              required
              {...field}
              id="email"
              className="text-lg px-4 py-2 rounded-md outline-none border-2 border-gray-700"
              type="email"
              placeholder="Enter the email"
            />
          )}
        />

        <label htmlFor="password" className="font-bold pt-2">
          Password
        </label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              required
              {...field}
              id="password"
              className="text-lg px-4 py-2 rounded-md outline-none border-2 border-gray-700"
              type="text"
              placeholder="Enter the Password"
            />
          )}
        />
      </div>

      <div className="flex justify-between gap-x-2 w-full pt-10">
        <button
          type="submit"
          className="w-2/3 text-white flex justify-center items-center gap-1 font-bold rounded-md px-4 py-2 bg-blue-800"
        >
          Reset password
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="w-1/3 text-white flex justify-center items-center gap-1 font-bold rounded-md px-4 py-2 bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
