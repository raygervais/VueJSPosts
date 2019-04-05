<template>
  <div id="app" class="about container">
    <h2>About</h2>
    <p>
      This application is the end result of Brad Traversey's <a href="https://www.youtube.com/watch?v=Wy9q22isx3U">VueJS 2019 Crash Course!</a><br />
      From there, I added the minimalist CSS framework Milligram, along with my own styling and functionality. 
    </p>
    <br />
    <h3>Technologies Used</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Domain</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-bind:key="tech.Name"
          v-for="tech in technologies">
          <td>{{tech.Name}}</td>
          <td>{{tech.Domain}}</td>
          <td>
              <a :href="'' + tech.Source">
                {{tech.Source}}
              </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "About",
  data () {
    return {
      technologies: [{
        Name: 'VueJS',
        Domain: 'Front-End JS Framework',
        Source: 'https://github.com/vuejs/vue'
      }, {
        Name: 'Milligram',
        Domain: 'Minimalist CSS Framework',
        Source: 'https://milligram.io/'
      }, {
        Name: 'Netlify',
        Domain: 'Continous Deployment and Hosting',
        Source: 'https://netlify.com/'
      }]
    }
  }
}
</script>

<style scoped>
  tbody tr:hover {
    background: rgba(105, 162, 176, 0.171);
  }

  tbody tr td:first-child {
    padding-left: 1rem;
  }

  p {
    padding-left: 0;
    text-transform: initial;
  }

  a { 
    font-weight: 700;
    color: #69A2B0;
  }

  a:hover {
    color: rgb(92, 141, 153);
  }
</style>


