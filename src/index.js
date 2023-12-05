import { fetchBreeds, fetchCatByBreed } from "./js/cat-api.js"
import SlimSelect from 'slim-select'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const selector = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loader");

function ShowError(message) {
    iziToast.show({
        title: 'Error',
        message: `❌ Oops! ${message}`,
        position: 'topRight',
        color: 'red',
    });
}

function toggleClass(element, isVisible) {
    element.classList.toggle('hidder', isVisible);
}

function createBreedDetailsMarkup(data) {
    const img = data[0].url;
    
    const { name, description, temperament, origin, country_code } = data[0].breeds[0]
  
    catInfo.innerHTML = `
      <div class="content__wrapper">
        <img class="content__img" src="${img}" alt="${name}"/>
        <div class="content__info">
          <h2 class="info__title">${name}</h2>
          <p><b class="info__text">Description:</b> ${description}</p>
          <p><b class="info__text">Temperament:</b> ${temperament}</p>
          <p><b class="info__text">Country:</b> ${origin}</p>
          <img class="info__flag" src="https://flagsapi.com/${country_code}/shiny/64.png" alt="Country code"> 
        </div>
      </div>
    `;
}

const select = new SlimSelect({
    select: selector,
    settings : {
        placeholderText: 'Search breeds',
    },
    events : {
        afterChange : async newVal => {
            toggleClass(catInfo, false);
            toggleClass(loaderEl, true);

            if (!newVal[0].value) {
                return;
            }

            await fetchCatByBreed(newVal[0].value)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                createBreedDetailsMarkup(response.data);
            })
            .catch(error => {
                ShowError(error);
            })
            .finally(() => {
                toggleClass(loaderEl, false);
                toggleClass(catInfo, true);
            });
        }
    }
});

(async function fetchOnLoad() {
    toggleClass(selector, false);
    toggleClass(loaderEl, true);
    await fetchBreeds()
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.status);
        }
        
        const options = response.data.map((breed) => ({ text: breed.name, value: breed.id }));
        select.setData([{ placeholder: true, text: '' }, ...options]);
    })
    .catch(error => {
        ShowError(error);
    })
    .finally(() => {
        toggleClass(loaderEl, false);
        toggleClass(selector, true);
    });
})();