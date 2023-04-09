import Carousel from 'react-bootstrap/Carousel';

export function Home() {
    return (
        <>
            <div className='Container'>
                <h1 className="d-flex justify-content-center align-items-center" style={{ fontSize: '5rem', color: '#ad5264', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Dour</h1>
                <h3 className='d-flex justify-content-center align-items-center' style={{ color: '#000000', WebkitTextFillColor: 'white', WebkitTextStroke: '1px black' }}>Prepare Yourself for the Gazipur Road</h3>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../public/imgs/brakes.jpg"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../public/imgs/brakes.jpg"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../public/imgs/brakes.jpg"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}