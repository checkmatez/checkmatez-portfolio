import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import catUrl from '../../assets/cat-with-notebook.jpg'
import Section from '../components/section'

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${catUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 80px);
`

const Text = styled.h1`
  font-size: 18px;
  color: white;
  margin: 0;
  text-align: center;
`

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

const IndexPage = ({ data }) => (
  <div>
    <Background url={data.file.relativePath}>
      <Text>Build your next mobile app with React Native</Text>
    </Background>
    <Section title="Skills" odd>
      <p>
        Build your next mobile app with React Native Build your next mobile app
        with React Native Build your next mobile app with React Native Build
        your next mobile app with React Native Build your next mobile app with
        React Native Build your next mobile app with React Native{' '}
      </p>
    </Section>
    <Section title="Portfolio">
      <p>
        Build your next mobile app with React Native Build your next mobile app
        with React Native Build your next mobile app with React Native Build
        your next mobile app with React Native Build your next mobile app with
        React Native Build your next mobile app with React Native{' '}
      </p>
    </Section>
    <Section title="Recommendations" odd>
      <p>
        Build your next mobile app with React Native Build your next mobile app
        with React Native Build your next mobile app with React Native Build
        your next mobile app with React Native Build your next mobile app with
        React Native Build your next mobile app with React Native{' '}
      </p>
    </Section>
    <Section title="Contacts">
      <a name="lol">
        <p name="lol">
          Build your next mobile app with React Native Build your next mobile
          app with React Native Build your next mobile app with React Native
          Build your next mobile app with React Native Build your next mobile
          app with React Native Build your next mobile app with React Native{' '}
        </p>
      </a>
    </Section>
  </div>
)

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "cat-with-notebook.jpg" }) {
      absolutePath
      relativePath
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 500, height: 500) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`

export default IndexPage
