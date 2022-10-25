import PropTypes from 'prop-types';
export const SkeletonElement = ({ type }) => {
    return (
        <div className={`skeleton ${type}`}></div>
    )
}
SkeletonElement.propTypes = {
    type: PropTypes.string,
};