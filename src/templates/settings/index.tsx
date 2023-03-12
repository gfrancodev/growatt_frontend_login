import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import {
  BiKey,
  AiOutlineCalendar,
  BsTelephone,
  FiTwitter,
  HiOutlineMail,
  FiHome,
  FiLinkedin,
  BsClipboard,
} from "@components/_ui/Icons";
import { ButtonComponent } from "@components/_ui/Button";
import { UploadProfile } from "@components/settings";
import { TextAreaComponent, InputComponent } from "@components/_ui/Input";
import { useFormik } from "formik";

export default function Settings_Template() {
  return (
    <Box
      pt={6}
      pb={6}
      px={{
        base: 3,
        md: 6,
      }}
      w={"full"}
      h={"full"}
      minH={"100vh"}
      color={"white"}
      overflowY={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          width: "0.3em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          outline: "1px solid  slategrey",
          borderRadius: "4px",
          backgroundColor: "#666",
        },
      }}
    >
      <UploadProfile />
      <ContentSettings />
    </Box>
  );
}

const ContentSettings = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      experience: "",
      biography: "",
      company: "",
      office: "",
      linkedin: "",
      twitter: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const isFullnameValid = Boolean(errors.fullname);
  const isEmailValid = Boolean(errors.email);
  const isPasswordValid = Boolean(errors.password);
  const isPhoneValid = Boolean(errors.phone);
  const isBirthdayValid = Boolean(errors.birthday);
  const isExperienceValid = Boolean(errors.experience);
  const isBiographyValid = Boolean(errors.biography);
  const isCompanyValid = Boolean(errors.company);
  const isOfficeValid = Boolean(errors.office);
  const isLinkedinValid = Boolean(errors.linkedin);
  const isTwitterValid = Boolean(errors.twitter);

  return (
    <Flex
      as={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      alignItems={{
        base: "center",
        md: "initial",
      }}
      justifyContent={{
        base: "center",
        md: "space-between",
      }}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
    >
      <Stack w={"full"} spacing={4}>
        <Heading as="h1" size="md" fontWeight="bold" mt={10}>
          Dados Pessoais
        </Heading>
        <InputComponent
          type={"text"}
          placeholder={"Nome completo:"}
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isFullnameValid}
          helperText={""}
        />
        <InputComponent
          type={"email"}
          iconLeft={<HiOutlineMail color="gray.300" fontSize={20} />}
          placeholder={"E-mail:"}
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isEmailValid}
          helperText={""}
        />
        <InputComponent
          type={"text"}
          iconLeft={<BiKey color="gray.300" fontSize={20} />}
          placeholder={"Senha:"}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isPasswordValid}
          helperText={""}
        />
        <InputComponent
          type={"text"}
          iconLeft={<BsTelephone color="gray.300" fontSize={20} />}
          placeholder={"Telefone:"}
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isPhoneValid}
          helperText={""}
        />
        <InputComponent
          type={"date"}
          iconLeft={<AiOutlineCalendar color="gray.300" fontSize={20} />}
          name="birthday"
          value={values.birthday}
          onChange={handleChange}
          placeholder={"Data de nascimento:"}
          isInvalid={isBirthdayValid}
          helperText={""}
        />
        <Heading as="h1" size="md" fontWeight="bold" mt={10}>
          Experiência
        </Heading>
        <TextAreaComponent
          placeholder={"Experiência:"}
          onChange={handleChange}
          value={values.experience}
          name="experience"
          isInvalid={isExperienceValid}
        />
      </Stack>
      <Container w={100} />
      <Stack w={"full"} spacing={5}>
        <Heading as="h1" size="md" fontWeight="bold" mt={10}>
          Biografia
        </Heading>
        <TextAreaComponent
          placeholder={"Biografia:"}
          onChange={handleChange}
          value={values.biography}
          name="biography"
          isInvalid={isBiographyValid}
        />
        <Heading as="h1" size="md" fontWeight="bold" mt={10}>
          Trabalho
          <Text as="span" fontSize="sm" color="gray.300" fontWeight="400">
            <br />
            Informações profissionais
          </Text>
        </Heading>
        <InputComponent
          type={"text"}
          iconLeft={<FiHome color="gray.300" fontSize={20} />}
          placeholder={"Empresa:"}
          name="company"
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isCompanyValid}
          helperText={""}
        />
        <InputComponent
          type={"text"}
          iconLeft={<BsClipboard color="gray.300" fontSize={20} />}
          placeholder={"Cargo:"}
          name="office"
          value={values.office}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isOfficeValid}
          helperText={""}
        />
        <InputComponent
          type={"text"}
          iconLeft={<FiLinkedin color="gray.300" fontSize={20} />}
          placeholder={"Link do linkedin:"}
          name="linkedin"
          value={values.linkedin}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isLinkedinValid}
          helperText={""}
        />
        <InputComponent
          type={"text"}
          iconLeft={<FiTwitter color="gray.300" fontSize={20} />}
          placeholder={"Link do Twitter:"}
          name="twitter"
          value={values.twitter}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={isTwitterValid}
          helperText={""}
        />
        <ButtonComponent
          size="lg"
          type="submit"
          text={"Salvar"}
          variant="solid"
          disabled={false}
          maxWidth={200}
          style={{ alignSelf: "flex-end" }}
        />
      </Stack>
    </Flex>
  );
};
