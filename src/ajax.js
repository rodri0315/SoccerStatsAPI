// const apiHost = 'https://bakesaleforgood.com';
const apiHost = 'http://api.football-data.org/v2/competitions/PD/standings';
const apiToken  = '0f8cbadbfc7843b7b443b43de9467fdd';

export default {
  async fetchInitialDeals() {
    try {
      let response = await fetch(
        `${apiHost}`, {
          method: 'get',
          headers: new Headers({
            'X-Auth-Token': apiToken,
          }), 
        }
      );
      let responseJson = await response.json();
      return responseJson.standings[0].table;
    } catch (error) {
      console.error(error);
    }
  }
};