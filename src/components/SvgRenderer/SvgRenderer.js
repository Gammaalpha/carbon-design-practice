import { PropTypes } from "carbon-components-react/lib/components/ListBox";
import React, { useState, useEffect } from "react";

const SvgRenderer = (props) => {
    const { resourceUrl, tooltips, name } = props;
    const [svgImg, setSvgImg] = useState(null)

    useEffect(() => {
        if (resourceUrl) {
            const fetchImage = async () => {
                await fetch(resourceUrl)
                    .then(res => res.text())
                    .then(svg => setSvgImg(svg))
            }
            fetchImage()
        }

    }, [resourceUrl])

    useEffect(() => {
        const customTooltip = document.getElementById(`svg-tooltip-${name}`)

        const handleMouseLeave = () => {
            customTooltip.classList.remove('active')
        }

        const handleMouseOver = (evt, desc) => {
            customTooltip.classList.add('active')
            customTooltip.style.top = `${evt.pageY - 60}px`;
            customTooltip.style.left = `${evt.pageX - 47}px`;
            customTooltip.innerHTML = desc;
        }

        if (svgImg && tooltips) {
            tooltips.forEach(element => {
                const pathLink = document.querySelector(`#${element.id}`);
                pathLink.addEventListener('mousemove', (evt) => handleMouseOver(evt, element.desc))
                pathLink.addEventListener('mouseleave', handleMouseLeave)
            });
        }

        return () => {
            tooltips.forEach(element => {
                const pathLink = document.querySelector(`#${element.id}`);
                pathLink.removeEventListener('mousemove', handleMouseOver)
                pathLink.removeEventListener('mouseleave', handleMouseLeave)
            });
        }
    }, [name, svgImg, tooltips])


    return (
        <React.Fragment>
            <div key={name} className="svg-section" dangerouslySetInnerHTML={{ __html: svgImg }}></div>
            <div id={`svg-tooltip-${name}`} className="tooltip-description"></div>
        </React.Fragment>
    )
}


SvgRenderer.defaultProps = {
    name: 'default_name',
    tooltips: []
}

SvgRenderer.propTypes = {
    resourceUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    tooltips: PropTypes.array,
}

export default SvgRenderer;