import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from './t2.png';
import logom from './tech1.png';
import work from './work.jpg';
import place from './place.jpg';
import favicon from './favicon.png';
import rishi from './rishi.jpg';
import wrk from './wrk.jpeg';
import amazon from './amazon-logo.png';
import netflix from './netflix-logo.png';
import microsoft from './microsoft-logo.png';


import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  console.log("Inner width", window.innerWidth);
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth 
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth }>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
           inverted 
            textAlign='center'
            style={{ minHeight: 293, padding: '0em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' :1}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Blogs</Menu.Item>
                <Menu.Item as='a'>About Us</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Contact Us
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Image src = {logo}  />
          </Segment>
          
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
          <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
          <Icon name='blogger b' />
            Blogs
          </Menu.Item>
          <Menu.Item as='a'>About Us</Menu.Item>\
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '0em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted >
                    Contact Us
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <Image src = {logom} fluid />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const App = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              What is Techosphere.in ?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We have the expertise to serve the best software knowledge base, suitable for everyone.
              This website consists of practical knowledge about software , programming and technology in the form of blogs written by experts. 
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We use and provide details about next generation technology.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, this website itself is made from latest tech using Semantic and React currently used by tech giants like
            </p>
            <p style={{ fontSize: '1.33em' }}>
            <Image src={amazon} size='tiny' spaced /> <Image src={netflix} size='tiny' spaced /> <Image src={microsoft} size='tiny' spaced /> 
            </p>
            {/* <p style={{ fontSize: '1.33em' }}>
            and who knows next will be your's.
            We engineer Software and Web App's and share the knowledge here.  
            </p> */}
            <p style={{ fontSize: '1.33em' }}>
            We engineer Software and Web App's and share the knowledge here. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={favicon} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Dive In</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Want a website like this ?
            </Header>
            <Image  src={wrk} size='small' circular verticalAlign='middle'/>
            <p style={{ fontSize: '1.33em' }}>Feel free to connect. We do a complete end to end web development and we have a network of experts.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Who is the creator ?
            </Header>
            <Image  src={rishi} size='small' circular verticalAlign='middle'/>
            <p style={{ fontSize: '1.33em' }}>
              <b>Rishikesh Chandra</b> CTO at Azuratech LLP| Software Architect| Node.js Fullstack| AWS| Micro Services
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>



    <Segment style={{ padding: '8em 0em' }} vertical>
    
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Simple is more clear and grabs attention.
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on too much specifics and technicality, we believe a simple presentation is much better to understand and to connect with the audience. 
          We create a communication bridge between people and technical experts and bring out the best in the form of blogs.
        </p>
        {/* <Button as='a' size='large'>
          Read More
        </Button> */}

        {/* <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '4em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider> */}

        {/* <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button> */}
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '4em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default App;


