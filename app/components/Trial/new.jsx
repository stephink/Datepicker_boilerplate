import * as React from 'react';
import { 
    Container,
    Icon,
    Link,
    List,
    ListItem,
    Offcanvas,
    OffcanvasContainer,
    Navbar,
    NavbarContainer,
    NavbarSticky,
    Section,
} from 'uikit-react';
 
export default class HomePage extends React.Component {
    render() {
        return (
            <OffcanvasContainer>
                <Section>
                    <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                        <NavbarContainer>
                            <Navbar>
                                <ListItem>
                                    <Link toggleOptions="target: #menu;" href="#">
                                        <Icon options="menu" button />
                                    </Link>
                                </ListItem>
                            </Navbar>
                        </NavbarContainer>
                    </NavbarSticky>
                    <Offcanvas id="menu" options="overlay: true">
                        <List type="divider">
                            <ListItem>
                                <Link href="/">Home</Link>
                            </ListItem>
                        </List>
                    </Offcanvas>
                </Section>
            </OffcanvasContainer>
        )
    }
}