import Navbar from "./Navbar";
import { Box, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";

export default function Layout({ children }) {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Navbar />
            <Box m={5}>{children}</Box>
        </>
    );
}
