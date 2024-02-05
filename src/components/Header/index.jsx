import { RiShutDownLine } from 'react-icons/ri';
import {Container, Profile, Logout} from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/lucascaalazans.png"
                alt="foto do usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Lucas Calazans</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}