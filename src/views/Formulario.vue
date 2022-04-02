<template>
      <section id="app">
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <form>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Name:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="user.name">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Email:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="user.email">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Age:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="user.age">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Gender:</label>

                            <div class="col-sm-10">
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-inline" value="Male" v-model="user.gender">Male
                                </div>
    
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-inline" value="Female" v-model="user.gender">Female
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Bio:</label>
                            <div class="col-sm-10">
                                <textarea type="text" class="form-control" v-model="user.bio"></textarea>
                            </div>
                        </div>


                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Skills:</label>
                            <div class="col-sm-10">
                                <div class="form-group form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="HTML" v-model="user.skills">
                                    <label class="form-check-label">HTML</label>
                                </div>
                                <div class="form-group form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="CSS" v-model="user.skills">
                                    <label class="form-check-label">CSS</label>
                                </div>
                                
                                <div class="form-group form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="JS" v-model="user.skills">
                                    <label class="form-check-label">JS</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Native Language:</label>
                            <div class="col-sm-10">
                                <select type="text" class="form-control" v-model="user.nativeLanguage">
                                    <option v-for="lang in user.languages" :value="lang">{{ lang }}</option>
                                </select>
                            </div>
                        </div>

                    </form>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h5>Form Data</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                                <li class="py-1">Name: {{ user.name }}</li>
                                <li class="py-1">Email: {{ user.email }}</li>
                                <li class="py-1">Age: {{ user.age }}</li>
                                <li class="py-1">Gender: {{ user.gender }}</li>
                                <li class="py-1">Bio: {{ user.bio }}</li>
                                <li class="py-1">Skills:
                                    <ul v-for="skill in user.skills">
                                        <li>{{ skill }}</li>
                                    </ul>
                                </li>
                                <li class="py-1">Native Language: {{ user.nativeLanguage}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    const app = new Vue({
  el:'#app',
  data: {
    user: {
      name: 'David',
      email: 'dbasabe@modyo.com',
      age: 25,
      gender: 'Male',
      bio: 'Web Developer at Modyo',
      skills: ['HTML'],
      nativeLanguage: 'Spanish',
      languages: ['Spanish', 'English', 'French']
    }
  }
})

}
</script>

<style>

</style>