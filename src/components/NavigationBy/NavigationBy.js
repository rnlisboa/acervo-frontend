import './style.css'
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Container, Content, ContentHeader, Elements, Header } from "./styled";
import { Link } from 'react-router-dom';

function NavigationBy() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    }

    return (
        <Container>
            <ContentHeader className='container-header'>
                <span>
                    Navegue por:
                </span>

            </ContentHeader>
            <Content>
                <Header className={`accordion-header ${openIndex === 0 ? 'open' : ''}`} onClick={() => handleClick(0)}>
                    <span>produtores</span>
                    {
                        (openIndex === 0) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }

                </Header>
                <Elements className={`accordion-content ${openIndex === 0 ? 'open' : ''}`}>
                    <div className='content'>
                        <span className='description'>Escola Industrial de Natal</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Universidade de São Paulo</span> <span className='number'>35</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Escola Martinho Lutero</span> <span className='number'>75</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Escola Pedro II</span> <span className='number'>2045</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Universidade Federal do Ceará</span> <span className='number'>87</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Escola Agrícola de Jundiaí</span> <span className='number'>3</span>
                    </div>
                </Elements>

                <Header className={`accordion-header ${openIndex === 1 ? 'open' : ''}`} onClick={() => handleClick(1)}>
                    <span>autores</span>
                    {
                        (openIndex === 1) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }
                </Header>
                <Elements className={`accordion-content ${openIndex === 1 ? 'open' : ''}`}>
                    <div className='content'>
                        <span className='description'>Neymar</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Marcos</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Luiz Henrique</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Vicente Del Bosque</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Pep Guadiola</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Arsene Wenger</span> <span className='number'>181</span>
                    </div>
                </Elements>

                <Header className={`accordion-header ${openIndex === 2 ? 'open' : ''}`} onClick={() => handleClick(2)}>
                    <span>instituições arquivísticas</span>
                    {
                        (openIndex === 2) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }
                </Header>
                <Elements className={`accordion-content ${openIndex === 2 ? 'open' : ''}`}>
                    <div className='content'>
                        <span className='description'>Instituto de Tecnologia da Aeronautica</span> <span className='number'>27</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Instituto Militar de Engenharia</span> <span className='number'>35</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Faculdade de Medicina de São Paulo</span> <span className='number'>12</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Universidade Católica de Curitiba</span> <span className='number'>87</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Faculdade Estácio de Sá</span> <span className='number'>2451</span>
                    </div>
                    <div className='content'>
                        <span className='description'>Camara dos Deputados do RN</span> <span className='number'>11</span>
                    </div>
                </Elements>

                <Header className={`accordion-header ${openIndex === 3 ? 'open' : ''}`} onClick={() => handleClick(3)}>
                    <span>recém publicados</span>
                    {
                        (openIndex === 3) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }
                </Header>
                <Elements className={`accordion-content ${openIndex === 3 ? 'open' : ''}`}>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                </Elements>

                <Header className={`accordion-header ${openIndex === 4 ? 'open' : ''}`} onClick={() => handleClick(4)}>
                    <span>categorias</span>
                    {
                        (openIndex === 4) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }
                </Header>
                <Elements className={`accordion-content ${openIndex === 4 ? 'open' : ''}`}>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                    <div className='content'>
                        <span className='description'>descrição</span> <span className='number'>181</span>
                    </div>
                </Elements>

                <Header className={`accordion-header ${openIndex === 5 ? 'open' : ''}`} onClick={() => handleClick(5)}>
                    <span>tipos de arquívos</span>
                    {
                        (openIndex === 4) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }
                </Header>
                <Elements className={`accordion-content ${openIndex === 5 ? 'open' : ''}`}>
                    <div className='content'>
                        <Link to={'/documentos'}>
                            <span className='description'>documentos</span>
                        </Link>
                        <span className='number'>54</span>
                    </div>
                    <div className='content'>
                        <Link to={'/imagens'}>
                            <span className='description'>imagens</span>
                        </Link>
                        <span className='number'>2547</span>
                    </div>
                    <div className='content'>
                        <Link to={'/videos'}>
                            <span className='description'>vídeos</span>
                        </Link>
                        <span className='number'>918</span>
                    </div>

                </Elements>
            </Content>
        </Container>
    );
}

export default NavigationBy;