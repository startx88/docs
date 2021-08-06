import Img from '../assets/profile-image.jpg';

export default function Image() {
  let m = document.createElement('img');
  m.src = Img;
  m.style.width = '200px';
  m.style.height = '200px';
  m.style.border = '1px solid #000';
  m.style.borderRadius = '50%';
  return m;
}