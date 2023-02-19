import * as React from 'react'
import { Blob } from 'react-blob'

const Avatar = ({src, alt}) =>
  <Blob size="100px" src={src} alt={alt}/>

const FunnyLinkButton = ({href, ...props}) =>
  <a href={href}><Blob size="2em" {...props}/></a>

const BackgroundBlob = ({style, props}) =>
  <Blob size="70vw"
    style={{
        position: 'relative',
        top: '0%',
        right: '0%',
        zIndex: -1,
        backgroundColor: 'green',
        color: 'blue',
        opacity: 1,
        fontSize: '100vh',

        ...style
    }}
    {...props}
  />

  export default BackgroundBlob