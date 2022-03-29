<template>
  <div class="w-[25%] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] p-3">
    <div class="flex flex-col gap-2">
      <n-select
        class="select--blue"
        v-model:value="value"
        :options="options"
        :default-value="options[0].value"
        :fallback-value="trim(options[0].label)"
      />
      <n-input round placeholder="Flash">
        <template #suffix>
          <n-icon :component="Search" />
        </template>
      </n-input>
      <n-select v-model:value="value" :options="options" size="small" />
    </div>
    <n-table class="max-h-[600px] mt-3">
      <n-scrollbar tag="teste" y-scrollable class="max-h-[500px]">
        <thead class="w-full">
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>qtd</th>
          </tr>
        </thead>
        <tbody class="w-full">
          <tr v-for="(data, i) in table" :key="i">
            <td>{{ data.name }}</td>
            <td>{{ data.lastname }}</td>
            <td>{{ i + 1 }}</td>
          </tr>
        </tbody>
      </n-scrollbar>
    </n-table>
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue"
  import { Search } from "@vicons/ionicons5"
  import { SelectOption } from "naive-ui"

  const value = ref(null)
  const options = reactive([
    {
      label: "Analistas por Aprovação",
      value: 0,
    },
    {
      label: "Aguardando por Aprovação",
      value: 1,
    },
  ])
  const trim = (value: string): SelectOption => {
    return {
      label: "teste",
      value,
    }
  }
  const table = reactive([
    {
      no: "1",
      name: "Jhon One",
      lastname: "Doe one",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
    {
      no: "1",
      name: "Jhon two",
      lastname: "Doe two",
    },
  ])
</script>
<style lang="scss" scoped>
  .select--blue {
    &::v-deep(.n-base-selection-label) {
      background-color: #30a7cf;
    }
    &::v-deep(.n-base-selection__border) {
      border-color: transparent;
    }
  }
  .select--blue {
    ::v-deep(.n-base-selection-placeholder) {
      color: #fff;
    }
  }
</style>
