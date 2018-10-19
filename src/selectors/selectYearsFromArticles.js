import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'

export default function selectYearsFromSections (sections) {
	return sections.map(({webPublicationDate}) => (
		getDateElsFromTimestamp(webPublicationDate).year
	)
}
