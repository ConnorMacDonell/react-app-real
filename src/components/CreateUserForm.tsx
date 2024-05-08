import { Box, Button, Center, Input, Spinner } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../entities/User";
import usersService from "../services/usersService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const CreateUserForm = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (d) => {
    try {
      setIsLoading(true);
      const result = await usersService.post(d);
      setIsLoading(false);

      toast({
        title: "Signup successful!",
        description: "Please log in",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Signup failed",
        description: "TO DO",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Center>
        <Box width="33vw">
          Signup
          <form onSubmit={handleSubmit(onSubmit)}>
            <label></label>
            <Input
              {...register("firstName")}
              placeholder="First Name"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              {...register("lastName")}
              placeholder="Last Name"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              type="email"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              type="password"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Button type="submit">{isLoading ? <Spinner /> : "Sign Up"}</Button>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default CreateUserForm;
