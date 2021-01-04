import React, {useState} from 'react';

const Accordion = (props) =>{

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
      setActiveIndex(index);
    }

    const renderedList = props.items.map( (item, index) =>{

      const active = index === activeIndex ? "show" : "";

      return(
          <div class="accordion-item" key = {item.title} style={{border:'1px solid black', margin:'10px'}}>
            <div className= "title collapse show" onClick = {() => {onTitleClick(index)}} style={{padding:'10px'}}>
              <i className="dropdown-toggle" style={{padding: '10px'}}></i>
              {item.title}
            </div>
            <div className= {"collapse " + active} style={{padding:'10px'}}>
              <p>{item.content}</p>
            </div>
          </div>
      );
    });

    return(
      <React.Fragment>
        <div className="accordion">
          {renderedList}
        </div>
      </React.Fragment>
    );
}

export default Accordion;
