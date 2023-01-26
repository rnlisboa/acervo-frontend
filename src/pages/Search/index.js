import NavigationBy from "../../components/NavigationBy/NavigationBy";
import { Container, Objects, HeaderContainer, Content } from "./styled";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
function Search() {
    const { query } = useParams()
    return (
        <>
            <Sidebar />
            <Container>
                <HeaderContainer>
                    Sua busca econtrou 35 resultados para "{query}".
                </HeaderContainer>
                <Content>
                    
                    <Objects className="objetcs">
                        
                    </Objects>
                    <NavigationBy/>
                </Content>

            </Container>



        </>
    )
}

export default Search;