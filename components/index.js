const User = () => {
  const { code } = Code();
  // file
  const file = useRef();
  // selectValue
  const selectValue = useRef();
  return (
    <Layout>
      <Container maxW={"container.xl"} my={10}>
        <HStack
          boxShadow="2xl"
          justifyContent={"space-around"}
          p={20}
          spacing={10}
        >
          <chakra.form w={"60%"} onSubmit={handleSubmit}>
            <VStack spacing={10}>
              {/* Guarda Imagen */}
              <InputGroup>
                <Button
                  w={"full"}
                  rightIcon={<DownloadIcon w={6} h={6} />}
                  variant={"outline"}
                  textTransform={"uppercase"}
                  onClick={() => file.current.click()}
                  size="md"
                  fontWeight={"normal"}
                  _hover={{ border: bg }}
                  p={1}
                >
                  Foto de Perfil : {progress}%
                </Button>
                <chakra.input
                  onChange={handleInputChange2}
                  name="photoURL"
                  type={"file"}
                  ref={file}
                  display="none"
                />
              </InputGroup>
              {/* Guarda Numero telefono */}
              <HStack w={"full"}>
                <InputGroup>
                  <Select
                    name="phoneNumber"
                    variant="filled"
                    ref={selectValue}
                    onChange={handleInputChange}
                    placeholder={"País"}
                    w={"30%"}
                  >
                    {code.map(({ code, name }) => (
                      <option key={name} value={code}>
                        {name}: {code}
                      </option>
                    ))}
                  </Select>
                  <Input
                    onChange={handleInputChange}
                    name={"phoneNumber"}
                    value={(selectValue.current = phoneNumber)}
                    type="tel"
                    placeholder="phone number"
                  />
                </InputGroup>
              </HStack>
            </VStack>
          </chakra.form>
        </HStack>
      </Container>
    </Layout>
  );
};

export default User;
