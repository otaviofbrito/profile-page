const projects = [164340388]
 
async function getRepos() {
  let url = "https://api.github.com/users/otaviofbrito/repos";

  try {
    let res = await fetch(url);

    return await res.json();

  } catch (error) {
    console.log(error)
  }
}

async function renderRepos() {

    let repos = await getRepos()
    let html = ''
    repos.forEach(repo => {
      const date = new Date(repo.updated_at);
      const formatedDate =  date.toLocaleDateString("en-US", { day: 'numeric' }) + " "+ date.toLocaleDateString("en-US", { month: 'short' }) + " " + date.toLocaleDateString("en-US", { year: 'numeric' });
       
      if (repo.language === 'C#'){
        const formatedLang = 'Csharp'
        repo.language = formatedLang
      }
      if (repo.language === 'C++'){
        const formatedLang = 'Cplusplus'
        repo.language = formatedLang
      }
     
      let htmlSegment = `

     <div class="card_content mix ${repo.language}">
      <a class="card" href="${repo.html_url}" target="_blank">
        <div class="card_info">
          <i class="icon-${repo.language}"></i>
          <span class="card-title">${repo.name}</span>
        </div>
        <div class="card_desc">
          <p>${repo.description}</p>
        </div>  
        <div class="card_bottom">
          <div class="card_tags">
            <ul>
              <li><i class="icon-code-fork"></i>${repo.forks}</li>
              <li><i class="icon-eye"></i>${repo.watchers}</li>
              <li><i class="icon-star"></i>${repo.stargazers_count}</li>
            </ul>
            <p class="card-date"><i class="icon-refresh-cw"></i>${formatedDate}</p>
            </div>
         </div>
        </a>
     </div> 
    `
      
    html += htmlSegment;
    const cards = document.querySelector('.cards')
    cards.innerHTML = html

    });
    
    
    let mixer = mixitup('.cards', {
      selectors: {
          target: '.card_content'
      },
      animation: {
          duration: 300
      }
    });
}

renderRepos()