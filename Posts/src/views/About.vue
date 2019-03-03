<template>
  <div id="app" class="about container">
    <h2>About</h2>
    <p>This is the TodoList app V2.0.0. It is part of TraversyMedia VueJS Crash Course 2019</p>
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
              <a :href="'//' + tech.Source">
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
        Domain: 'Front-end JS Framework',
        Source: 'https://github.com/vuejs/vue'
      }, {
        Name: 'Milligram',
        Domain: 'Minimalist CSS Framework',
        Source: 'https://milligram.io/'
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
</style>


