import React, { useState } from "react";
import logo from '../logo.png'
import styled from "styled-components";
import adm from '../adm.png';
import biomed from '../biomed.png';
import contabeis from '../contabeis.png';
import edufisica from '../edufisica.png';
import farmacia from '../farmacia.png';
import nutri from '../nutri.png';
import pedagogia from '../pedagogia.png';
import desenvolvimento from '../desenvolvimento.png';
import ambiental from '../ambiental.png';
import comercial from '../comercial.png';
import financeira from '../financeira.png';
import publica from '../publica.png';
import logistica from '../logistica.png';
import marketing from '../marketing.png';
import humanos from '../humanos.png';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem;
`;

const Logo = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: column;
  background-color: #D9D9D9;
  width: 1612px;
  height: 41px;
  flex-shrink: 0;
  text-align: center;
  align-items: center;
`;

const Cursos = styled.div`
font-family: Jacques Francois;
color: #000;
text-align: center;
font-family: Jacques Francois;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 8px;

`;

const ListaCursos = styled.ul`
cursor: pointer;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
color: black; 

`;

const CursoItem = styled.li`
display: flex;
align-items: center;
margin: 10px;

`;

const Titulo = styled.div`
color: #000;
text-align: center;
font-family: Jacques Francois;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Anuncio = styled.div`

  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  font-family: 'Jacques Francois', sans-serif;
  font-size: 28px;
  text-align: center;
  color: #333;
  margin: 50px;
  padding: 10px;
  width: 79%;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #4caf50; 
    color: #fff;
    transform: scale(1.05);
  }

`;


const Home = () => {

    const [showCursos, setShowCursos] = useState(false)

    const handleClickShowCursos = () => {
        setShowCursos(!showCursos)
    }



    return (
        <Container>
            <Titulo>Centro Universitário Serra dos Órgãos</Titulo>
            <Logo src={logo} alt="logo-unifeso" />
            <Anuncio>Você já ouviu falar que a Unifeso agora oferece cursos na
                modalidade EAD? Não? Pois bem, agora é mais simples do que nunca
                concretizar o seu grande sonho de obter um diploma.
                Conte com a flexibilidade e a qualidade de ensino da Unifeso!
                Entre em contato conosco e agende já o seu Vestibular 2024:
                Nosso contato, caso necessite:
                (21) 2641-7022 / 2641-7026
                E-mail: segen@unifeso.edu.br
            </Anuncio>
            <Nav>
                <Cursos onClick={handleClickShowCursos}>Clique aqui e veja nossos Cursos</Cursos>

            </Nav>

            {showCursos && (
                <ListaCursos>


                    <img src={adm} />
                    <CursoItem>Administração</CursoItem>

                    <img src={biomed} />
                    <CursoItem>Biomedicina</CursoItem>

                    <img src={contabeis} />
                    <CursoItem>Ciências Contábeis</CursoItem>

                    <img src={edufisica} />
                    <CursoItem>Educação Física - Bacharelado ou Licenciatura</CursoItem>

                    <img src={farmacia} />
                    <CursoItem>Farmácia</CursoItem>


                    <img src={nutri} />
                    <CursoItem>Nutrição</CursoItem>

                    <img src={pedagogia} />
                    <CursoItem>Pedagogia</CursoItem>

                    <img src={desenvolvimento} />
                    <CursoItem>Tecnologia em Análise e Desenvolvimento de Sistemas</CursoItem>

                    <img src={ambiental} />
                    <CursoItem>Tecnologia em Gestão Ambiental</CursoItem>

                    <img src={comercial} />
                    <CursoItem>Tecnologia em Gestão Comercial</CursoItem>

                    <img src={financeira} />
                    <CursoItem>Tecnologia em Gestão Financeira</CursoItem>

                    <img src={publica} />
                    <CursoItem>Tecnologia em Gestão Pública</CursoItem>

                    <img src={humanos} />
                    <CursoItem>Tecnologia em Recursos Humanos</CursoItem>

                    <img src={logistica} />
                    <CursoItem>Tecnologia em Logística</CursoItem>

                    <img src={marketing} />
                    <CursoItem>Tecnologia em marketing</CursoItem>


                </ListaCursos>


            )}

        </Container>
    );
}

export default Home;
