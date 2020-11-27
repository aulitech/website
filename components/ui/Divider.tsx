import { Divider as ChakraDivider } from '@chakra-ui/react'

const Divider: React.FC = () => (
  <ChakraDivider
    h="4px"
    w="40px"
    bg="gray.600"
    mt={2}
    mb={4}
    borderBottom="none"
  />
)

export default Divider
