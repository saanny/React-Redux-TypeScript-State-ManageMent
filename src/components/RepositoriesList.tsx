import { useState } from "react";
import { useActions } from "../hooks/useAction";
import { useSelector } from "../hooks/useTypeSelector";
import { Container } from "@chakra-ui/react";
import {
  Input,
  Button,
  Stack,
  Center,
  Heading,
  Text,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  function Feature({ title, desc }: any) {
    return (
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }

  return (
    <Container>
      <Center bg="black" h="50px" color="white">
        <Heading>Search for Package</Heading>
      </Center>
      <form onSubmit={onSubmit}>
        <Box
          borderWidth="1px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={5}
        >
          <Input
            type="text"
            value={term}
            onChange={(e) => {
              const { value } = e.target;
              setTerm(value);
            }}
          />
          <Button type="submit" ml={2} loading={loading}>
            Search
          </Button>
        </Box>
      </form>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {loading && (
        <Center mt={4}>
          <CircularProgress isIndeterminate color="gray" />
        </Center>
      )}
      <Stack spacing={8} mt={4}>
        {!error &&
          !loading &&
          data.map((name) => {
            return (
              <Feature
                title={name}
                desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              />
            );
          })}
      </Stack>
    </Container>
  );
};
