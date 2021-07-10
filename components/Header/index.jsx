import PropTypes from 'prop-types'
import styles from './Header.module.scss'

const Header = (props) => {
  const { children } = props
  return <header className={styles.header}>{children}</header>
}

export default Header

Header.propTypes = {
  children: PropTypes.element.isRequired,
}
