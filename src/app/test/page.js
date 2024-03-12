import {Poller_One, } from 'next/font/google'

import '/public/styles/fonts.css'

const roboto = Poller_One({
  weight: '400',
  subsets: ['latin'],
})


export default function Test() {
  return (
      <>
      <p className={roboto.className}>erunt doloribus, dolorum eum ex fugiat labore libero minima
        perspiciatis, porro repellendus, sit. Ab amet aperiam asperiores atque
        debitis distinctio dolor, dolore doloremque error excepturi facilis
        incidunt iure laborum maiores natus non odit pariatur perferendis
        perspiciatis placea</p>

      <p style={{fontFamily: 'MyFont'}}>
        Pretendard 프리텐다드
        awefiawefjwejfoi
      </p>
        <p>
          Pretendard 프리텐다드
          awefiawefjwejfoi
        </p>
      </>
  );
}
