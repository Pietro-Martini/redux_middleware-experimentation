import React from 'react'

class BookmarkedSections extends React.Component {
  componentDidMount = this.props.retrieveCachedBookmarkedSections

  render = () => {
    return this.props.bookmarkedSectionsInState && (
    <div className='bookmarked-sections'>
      <h1>Bookmarked Sections</h1>
      <ul className='bookmarked-sections'>
        {this.props.bookmarkedSections.map(({id, webTitle, webUrl}) => (
          <li className='bookmarked-section'>
            <a href={webUrl}><h1>{webTitle}</h1></a>
            <p onClick={e => this.props.deleteBookmarkedSection(id)}>
              Remove from Saved Titles
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
  }
}

export default BookmarkedSections
