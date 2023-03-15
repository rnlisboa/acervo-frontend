import './style.css'
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Container, Content, ContentHeader, Elements, Header, SeeMore } from "./styled";
import { api } from '../../services/api'
import { Formata } from '../../config/default';
import { Link } from 'react-router-dom';

function NavigationBy() {

    const [openIndex, setOpenIndex] = useState(null);
    const [categoria, setCategoria] = useState([]);
    const [produtor, setProdutor] = useState([]);
    const [album, setAlbum] = useState([])
    const [recentes, setRecentes] = useState([])
    const [instituicoes, setInstituicoes] = useState([])

    const handleClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    }

    function ordenarCount(lista) {
        lista.sort(function(a, b) {
          return b.objects_count - a.objects_count;
        });
        return lista;
      }

    useEffect(() => {
        async function getData() {
            const respProd = await api.get('produtores/show')
            setProdutor(respProd.data)

            const respCat = await api.get('categorias/show')
            setCategoria(respCat.data)

            const respAlbum = await api.get('albums/show')
            setAlbum(respAlbum.data)

            const respRecentes = await api.get('arquivos/show_all')
            setRecentes(respRecentes.data.results)

            const respInst = await api.get('instituicoes/show')
            setInstituicoes(respInst.data)
        }

        getData()
    }, [])
    let categorias = ordenarCount(categoria)
    let produtores = ordenarCount(produtor)
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
                    {
                        produtores.map(prod => (
                            prod.objects_count > 0 &&
                            <div className='content' key={produtores.indexOf(prod)}>
                                <span className='description'>
                                    <Link to={`/relacionados/${prod.slug}`}>
                                        {Formata(prod.nome_produtor, 33)}
                                    </Link>
                                </span>
                                <span className='number'>{prod.objects_count}</span>
                            </div>
                        ))
                    }

                    <SeeMore>
                        <Link to={'/produtores/1'}>
                            Ver mais
                        </Link>
                    </SeeMore>
                </Elements>



                {
                    instituicoes.length > 0 && <Header className={`accordion-header ${openIndex === 2 ? 'open' : ''}`} onClick={() => handleClick(2)}>
                        <span>instituições arquivísticas</span>
                        {
                            (openIndex === 2) ? (
                                <FaAngleUp />
                            ) : (
                                <FaAngleDown />
                            )
                        }
                    </Header>
                }
                {
                    instituicoes.length > 0 && <Elements className={`accordion-content ${openIndex === 2 ? 'open' : ''}`}>
                        {
                            instituicoes.map(inst => (
                                <div className='content' key={inst.id}>
                                    <a href={inst.link} target="_blank">
                                        <span className='description'>{Formata(inst.nome, 33)}</span>
                                    </a>

                                </div>
                            ))
                        }

                    </Elements>
                }


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
                    {
                        recentes.map(rec => (
                            <div className='content' key={rec.id}>
                                <Link to={`/detalhes/${rec.id}`}>
                                    <span className='description'>{Formata(rec.titulo, 33)}</span>
                                </Link>

                            </div>
                        ))
                    }

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
                    {
                        categorias.map(cat => (
                            cat.objects_count > 0 &&
                            <div className='content' key={categorias.indexOf(cat)}>
                                <Link to={`/relacionados/${cat.slug}`}>
                                    <span className='description'>{cat.nome_categoria}</span>
                                </Link>
                                <span className='number'>{cat.objects_count}</span>
                            </div>
                        ))
                    }

                    <SeeMore>
                        <Link to={'/categorias/1'}>
                            Ver mais
                        </Link>
                    </SeeMore>
                </Elements>


                <Header className={`accordion-header ${openIndex === 6 ? 'open' : ''}`} onClick={() => handleClick(6)}>
                    <span>álbuns de fotografias</span>
                    {
                        (openIndex === 6) ? (
                            <FaAngleUp />
                        ) : (
                            <FaAngleDown />
                        )
                    }
                </Header>
                <Elements className={`accordion-content ${openIndex === 6 ? 'open' : ''}`}>
                    {
                        album.map(albm => (
                            albm.num_fotos > 0 &&
                            <div className='content' key={album.indexOf(albm)}>
                                <Link to={`/album/${albm.slug}`}><span className='description'>{Formata(albm.titulo, 33)}</span></Link>

                            </div>
                        ))
                    }

                    <SeeMore>
                        <Link to={'/albuns/1'}>
                            Ver mais
                        </Link>
                    </SeeMore>
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
                        <Link to={'/documentos/1'}>
                            <span className='description'>documentos</span>
                        </Link>

                    </div>
                    <div className='content'>
                        <Link to={'/imagens/1'}>
                            <span className='description'>imagens</span>
                        </Link>

                    </div>
                    <div className='content'>
                        <Link to={'/videos/1'}>
                            <span className='description'>vídeos</span>
                        </Link>
                    </div>

                </Elements>
            </Content>
        </Container>
    );
}

export default NavigationBy;