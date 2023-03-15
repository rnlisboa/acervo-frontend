import React, { useState, useEffect, useMemo } from "react";
import {
    AlbumWrapper,
    ImageList,
    Image,
    SelectedImageWrapper,
    SelectedImage,
    Container,
    InfoAlbum,
    TitleAlbum,
    DataUploadAlbum,
    IconData,
    TextData,
    DesciptionAlbum,
    List,
    DataEvent,
    CurrentItem,
    Button,
    Header,
    NoContent,
    Title,
    Desciption,
} from './styled'
import { FaRegCalendar, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useParams } from "react-router-dom";
import { api } from "../../services/api"


function Album() {
    const [index, setIndex] = useState(0);
    const [infoAlbum, setInfoAlbum] = useState([])
    const fotos = []

    const { slug } = useParams()
    const images = useMemo(() => fotos, []);

    useEffect(() => {
        async function getData() {
            const resp = await api.get('fotos/filter_album', {
                params: {
                    q: slug
                }
            })

            setInfoAlbum(resp.data[0].album)
            resp.data.map(obj => (
                fotos.push(obj.foto)
            ))
        }

        getData()
        function handleKeyDown(event) {


            if (event.key === "ArrowLeft") {
                setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            } else if (event.key === "ArrowRight") {
                setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }

        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };


    }, [images, index, fotos, slug]);

    return (

        <Container>
            {
                images.length >0 ? (
                    <>
                    <AlbumWrapper>
                <Header>
                    <TitleAlbum>
                        {infoAlbum.titulo}
                    </TitleAlbum>

                    <DataUploadAlbum>
                        <IconData>
                            <FaRegCalendar />
                        </IconData>
                        <TextData>
                            {infoAlbum.created_at.slice(8,10) + '/' + infoAlbum.created_at.slice(5,7) + '/' + infoAlbum.created_at.slice(0,4)}
                        </TextData>
                    </DataUploadAlbum>
                </Header>

                {
                    index > 0 &&
                    <Button className="left" onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}>
                        <FaAngleLeft />
                    </Button>
                }
                {
                    index < images.length - 1 &&
                    <Button className="rigth" onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}>
                        <FaAngleRight />
                    </Button>
                }



                <SelectedImageWrapper>
                <CurrentItem>
                    Foto {index + 1} de {images.length}
                </CurrentItem>
                    <SelectedImage src={'http://127.0.0.1:8000' + images[index]} alt={`${index + 1}`} />
                </SelectedImageWrapper>

                <ImageList>
                    {
                        images[index - 1] &&
                        <List><Image src={'http://127.0.0.1:8000' + images[index - 1]} onClick={() => setIndex(index - 1)} /></List>
                    }
                    <List><Image className="principal" src={'http://127.0.0.1:8000' + images[index]} onClick={() => setIndex(index)} /></List>
                    {
                        images[index + 1] &&
                        <List><Image src={'http://127.0.0.1:8000' + images[index + 1]} onClick={() => setIndex(index + 1)} /></List>
                    }
                </ImageList>

                

            </AlbumWrapper>

            <InfoAlbum>

                <DesciptionAlbum>
                    <Title>Descrição</Title>
                    <Desciption>{infoAlbum.descricao}</Desciption>
                    
                </DesciptionAlbum>

                <DataEvent>
                    <Title>Data do evento</Title>
                    <Desciption>{infoAlbum.data}</Desciption>
                </DataEvent>

            </InfoAlbum>
                    </>
                ) : (
                    <NoContent>
                        <h1>
                            Álbum ainda sem fotos.
                        </h1>
                    </NoContent>
                    )
            }

            
        </Container>

    );
}

export default Album;
