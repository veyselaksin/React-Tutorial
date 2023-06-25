import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerimage from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';

function Banner(){

    const [loop, setLoop] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Go Developer", "Backend Developer", "Freelancer"];
    const [delta , setDelta] = useState(300 - Math.random());
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            handleRotate();
        }, delta);

        return () => {
            clearInterval(ticker);
        }
    }, [text]);

    const handleRotate = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let utext = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(utext);

        if (isDeleting) {
            setDelta(delta => delta / 2);
        }

        if (!isDeleting && utext === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && utext === '') {
            setIsDeleting(false);
            setLoop(loop + 1);
            setDelta(500);
        }
    }
        

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Veysel`} <span className='wrap'> {text} </span> </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero, culpa quis, officia deserunt explicabo adipisci ullam quos praesentium vero itaque ipsam rem nobis facere voluptas nam aliquid repellendus pariatur!
                        </p>
                        <button>
                            Let’s Connect <ArrowRightCircle size={25}/>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerimage} alt="Header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner