<template>
  <div>
    <v-card flat>
      <v-card-title class="text-h4">
        프로필
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="2">
            <v-img
              max-height="200px"
              max-width="150px"
              :src="require('@/assets/profile.jpg')"
            />
          </v-col>
          <v-col
            cols="9"
            justify="start"
          >
            <div class="text-h4">
              윤재근
            </div>

            <div>
              웹 프론트엔드 엔지니어 윤재근 입니다. 여러 프로젝트를 수행하면서 개발 역량을 쌓아왔고, 현재는 삼성SDS TMS사이트 유지보수 및 개발 업무를 수행하고 있습니다. <br><br>

              자기개발에 손을 놓지 않습니다. 퇴근 후는 사이드프로젝트를 하며 공부합니다. 개인적으로 진행하는 프로젝트와 팀원들과 협업하는 프로젝트를 병행하고 있습니다.
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
