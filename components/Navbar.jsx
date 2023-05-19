import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Spacer,
    useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box m={2}>
                <Flex>
                    <Button colorScheme='orange' variant='ghost'>
                        Home
                    </Button>
                    <Button colorScheme='orange' variant='ghost'>
                        Blog
                    </Button>
                    <Spacer />
                    <ButtonGroup>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Box>
        </>
    );
}
