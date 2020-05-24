<template>
  <v-container>
    <v-card color="blue darken-4" style="opacity: 0.8;">
      <v-row justify="center">
        <h1 class="headline" style="color: white; font-weight: bold;">ルール</h1>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h4 class="text-center" style="color: white; font-weight: bold;">ナンバー設定</h4>
          <v-row justify="center">
            <v-col cols="4">
              <p class="text-center" style="color: white;">
                最初に遊ぶ桁数を選択する。
                <br />プレイヤーは0〜9までの数字から異なる桁数分の数字を選択し、
                <br />ナンバーを作る。
                <br />（0から始まる数字でも良い。）
              </p>
            </v-col>
          </v-row>
          <h4 class="text-center" style="color: white; font-weight: bold;">コール</h4>
          <v-row justify="center">
            <v-col cols="8">
              <p class="text-center" style="color: white">
                相手の設定した数字を予測して、番号をコールする。
                <br />数字と場所（桁）が合っている場合は『EAT』,
                <br />数字は合っているが場所が間違っている場合は『BITE』を加算する。
                <br />（例）相手のナンバーが851で自分が153とコールしたとする。
                <br />この場合、5はEAT、1はBITEとなっているため、1EAT 1BITEである。
                <br />対戦の場合、先に相手のナンバーを当てた方の勝利となる。
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "RuleDescription"
};
</script>
