import * as React from 'react'
import { Blob } from 'react-blob'

const Avatar = ({src, alt}) =>
  <Blob size="100px" src={src} alt={alt}/>

const FunnyLinkButton = ({href, ...props}) =>
  <a href={href}><Blob size="2em" {...props}/></a>

const BackgroundBlob = ({style, props}) =>
  <Blob size="70vh"
    style={{
        position: 'relative',
        top: '1%',
        right: '1%',
        zIndex: -1,
        backgroundColor: '#21D4FD',
        color: 'white',
        opacity: 1,
        fontSize: '40vh',
        ...style
    }}
    {...props}
  />

  export default BackgroundBlob