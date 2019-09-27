$(function () {
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('form being submitted')

    const query = $('#query').val()
    console.log(query)

    $('#results-table tbody').html('')
    $('#query').val('')

    search(query)
  })

  function displayResults (gifs) {
    console.log(gifs)
    gifs.forEach((gif) => {
      $('#results-table tbody').append(
        `<tr>
          <td>${gif.title}</td>
          <td><img src="${gif.images.fixed_height.url}"></td>
          <td>${gif.rating}</td>
          <td><a href="${gif.url}"> link </a></td>
        </tr>`
      )
    })
  }

  async function search (searchTerm) {
    try {
      const url = 'https://api.giphy.com/v1/gifs/search'
      const apiKey = 'fMI9TfopM0kycP7aWznKC62iGbzY0Pg7'

// API request using .AJAX
      // $.ajax({
      //   url: url,
      //   type: 'GET',
      //   data: { q: searchTerm, limit: 50, api_key: apiKey }
      // })
      // .done((response) => {
      //   // execute this function if request is successful
      //   console.log(response)
      //   displayResults(response.data)
      // })
      // .fail(() => {
      //   // execute this function if request fails
      //   alert('error occurred')
      // })

// API request using regular Promise(then()) syntax = AXIOS
     //    axios.get(url, {
     //      params:{
     //        q: searchTerm,
     //        api_key: apiKey,
     //        limit: 50
     //   }
     // }).then((response) => {
     //   // we use 2 data words cos giphy gives us property named DATA too
     //   console.log(response.data.data)
     //   displayResults(response.data.data)
     // }).catch((error) => {
     //   // we simulate error by adding an extra number, for example, to our api key
     //   console.log(error)
     //   alert("Oh oh, something's wrong")
     // })

 // API request using async/await

     const response = await axios.get(url, {
         params: {
           q: searchTerm,
           api_key: apiKey,
           limit: 50
        }
      })

      console.log(response.data.data)
      displayResults(response.data.data)
    } catch (e) {
      console.log(e)
      alert("Oh no!")
    }
   }

})
