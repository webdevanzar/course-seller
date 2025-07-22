import { GrCycle } from "react-icons/gr";
import { generateRandomPassword } from "../utils/PasswordGenerate";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

type FormValuesType = {
  name: string;
  email: string;
  password: string;
  courses: string[];
};

const defaultValues: FormValuesType = {
  name: "",
  email: "",
  password: "",
  courses: [],
};

const AddUser = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const { handleSubmit, control, reset, setValue } = useForm<FormValuesType>({
    defaultValues,
  });

  const GeneratePassword = () => {
    const newPass = generateRandomPassword();
    setGeneratedPassword(newPass);
    setValue("password", newPass); // Set it to the form field
  };

  const onSubmit = (data: FormValuesType) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 w-full bg-amber-200 rounded-md"
    >
      <h1 className="text-2xl font-bold text-center pb-4">Add new user</h1>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              required
              {...field}
              id="name"
              className="text-lg px-4 py-2 rounded-md outline-none border-2 border-gray-700"
              type="text"
              placeholder="Enter the name"
            />
          )}
        />

        <label htmlFor="email" className="font-bold pt-2">
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

        <label htmlFor="password" className="font-bold  pt-2">
          Password
        </label>
        <div className="flex w-full items-center gap-x-4">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                required
                {...field}
                id="password"
                className="text-lg w-full px-4 py-2 rounded-md outline-none border-2 border-gray-700"
                type="text"
                placeholder="Password"
              />
            )}
          />

          <GrCycle
            onClick={GeneratePassword}
            className="rounded-md bg-gray-500 px-2 py-1 cursor-pointer"
            size={44}
            title="Generate Password"
          />
        </div>

        <label htmlFor="courses" className="font-bold  pt-2">
          Courses
        </label>
        <Controller
          control={control}
          name="courses"
          rules={{
            validate: (value) =>
              value.length > 0 || "Please select at least one course",
          }}
          render={({ field,fieldState }) => {
            const handleCheckboxChange = (course: string) => {
              const current = field.value || [];
              if (current.includes(course)) {
                field.onChange(current.filter((c) => c !== course));
              } else {
                field.onChange([...current, course]);
              }
            };

            return (
              <div className="flex flex-col gap-2">
                {["English", "Hindi", "Malayalam"].map((course) => (
                  <label key={course} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={field.value.includes(course)}
                      onChange={() => handleCheckboxChange(course)}
                      className="w-4 h-4"
                    />
                    <span>{course}</span>
                  </label>
                ))}
                {fieldState.error && (
                  <span className="text-red-600 text-sm">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            );
          }}
        />
      </div>

      <div className="flex justify-between gap-x-2 w-full pt-10">
        <button
          type="submit"
          className="w-2/3 text-white flex justify-center items-center gap-1 font-bold rounded-md px-4 py-2 bg-blue-800"
        >
          Add User
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

export default AddUser;
