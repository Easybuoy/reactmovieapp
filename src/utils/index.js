export const convertTime = (time) => {
    const minutes = time % 60;
    const hours = (time - minutes) / 60;
    
    return `${hours  }h ${  minutes  }m`;
    }

export const convertArrayToCommaSeperated = (array) =>{
        let response = '';
        array.map((singleitem, i) => {
           return response += `${singleitem.name  }, `;
        });
        
        return response.slice(0, -2);
      }

export const trimText = (text) => {
        return `${text.substring(0, 50)  }...`;
     }