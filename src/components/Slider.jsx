import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import { sliderItems } from '../data'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
  ${tablet({ display: 'none' })}
`
const Arrow = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
  background: #777;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.2;
  z-index: 3;
  ${tablet({ margin: '20% 10px' })}
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
const ImgContainer = styled.div`
  /* flex: 1; */
  height: 100%;
  position: relative;
`
const Image = styled.img`
  height: auto;
  max-width: 100%;
  width: 100vw;
  /* background-image: url(https://demo.thepunte.com/punte-pro/ecommerce-furniture/wp-content/uploads/sites/10/2020/06/main-slider-2.jpg);
  background-repeat: no-repeat; */
  user-select: none;
  pointer-events: none;
`
const InfoContainer = styled.div`
  padding: 50px;
  position: absolute;
  top: 45%;
  left: 10%;
  transform: translateY(-50%);
  max-width: 50%;
  user-select: none;
  ${tablet({ top: '15%', padding: '20px 50px' })}
`
const Title = styled.h1`
  font-size: 60px;
  ${tablet({ fontSize: '1.5em' })}
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  line-height: 35px;
  font-weight: 500;
  letter-spacing: 3px;
  ${tablet({ margin: '20px 0', fontSize: '0.6em' })}
`
export const Button = styled.button`
  outline: none;
  border: 1px solid #444;
  padding: 15px;
  background: rgba(1, 1, 1, 0);
  font-size: 16px;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
    background: #666;
    color: #f1f1f1;
  }
  ${tablet({ fontSize: '0.6em' })}
`

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const swSlide = (dir) => {
    if (dir === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    if (dir === 'right') {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    // <div>
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slider) => (
          <Slide key={slider.id}>
            <ImgContainer>
              <Image src={slider.img} />
              <InfoContainer>
                <Title>{slider.title}</Title>
                <Desc>
                  {slider.desc1}
                  <br />
                  {slider.desc2}
                </Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left" onClick={() => swSlide('left')}>
        <ChevronLeftOutlinedIcon />
      </Arrow>
      <Arrow direction="right" onClick={() => swSlide('right')}>
        <ChevronRightOutlinedIcon />
      </Arrow>
    </Container>
    // </div>
  )
}
