<template>
  <div class="docbox" id="content" v-html="doc" v-highlight>
  </div>
</template>

<script>

    import axios from "axios";
    import marked from 'marked';

    export default {
        name: "Doc",
        data() {
            return {
                doc: ''
            }
        },
        props: ['type', 'id'],
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                axios.get("http://localhost:8081/doc/" + vm.type + "/" + vm.id).then(
                    response => {
                        vm.doc = marked(response.data.doc);
                    }
                );
            });
        }
    }
</script>

<style>
  .docbox {
    width: 900px;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    border-color: #bfbfbf;
    margin-top: 40px;
    margin-left: 300px;
    margin-right: 0;
    background-color: white;
  }
</style>
