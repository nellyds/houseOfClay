<template>
  <div>
    <v-row cols="6">
      <v-col md="4" v-if="$vuetify.breakpoint.smAndUp" />
      <v-col md="4">
    <p class="para">{{p2}}</p>
    <p class="para">{{p5}}</p>
    <p class="para">{{p4}}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Medication",
  data(){
    return{
      p1: "Suboxone is a medication used to treat opiate dependence that contains buprenorphine and naloxone.",
      p2: "MAT is a corrective but not a curative treatment for opiate dependence. The most effective MATs to treat opiate dependence are methadone (Dolophine®, Methadose®) and buprenorphine (Suboxone®, Zubsolv®). These are among the drugs classified as opiates; treatment with these drugs is called opiate replacement therapy (ORT). These are long-acting medications that, when taken as prescribed, do not get the person high. ",
      p3: "Because methadone and buprenorphine are opiates, some people equate them to “giving drugs to drug addicts.” But this is not the case. These drugs relieve narcotic craving, prevent symptoms of opiate withdrawal, and block the euphoric effects associated with heroin and other more powerful narcotic medications ",
      p4: "Under the care and medical expertise provided at House of Clay, you will, devise a safe, effective MAT plan.",
      p5: "Vivitrol, another medication we often prescribe, is in an opioid antagonist or BLOCKIN MEDICATION that does not lead to physical dependence. It is a prescription injectable. It can help with opioid, alcohol and other use disorders."
    }
  }
};
</script>
<style scoped>
body{
  text-align: center;
}
.para{
  border: solid 2px white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  font-family: 'Sunflower';
  font-size: 1.3em;
  width: 380px;
}

</style>
