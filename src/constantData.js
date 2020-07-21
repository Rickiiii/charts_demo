export const Data = {
  // 柱状图
  IntervalData: [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 45 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ],

  IntervalOptions: {
    xAxis: {
      type: 'category',
      data: ['1951 年', '1952 年', '1956 年', '1957 年', '1958 年', '1959 年', '1960 年', '1962 年']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [38, 52, 61, 45, 48, 38, 38, 38],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      }
    }]
  },

  // 饼图
  CoordData: [
    { item: '事例一', count: 40, percent: 0.4 },
    { item: '事例二', count: 21, percent: 0.21 },
    { item: '事例三', count: 17, percent: 0.17 },
    { item: '事例四', count: 13, percent: 0.13 },
    { item: '事例五', count: 9, percent: 0.09 },
  ],

  CoordOptions: {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
  },

  // 折线图
  LineData: [
    {
      month: "Jan",
      city: "Tokyo",
      temperature: 7
    },
    {
      month: "Jan",
      city: "London",
      temperature: 3.9
    },
    {
      month: "Feb",
      city: "Tokyo",
      temperature: 6.9
    },
    {
      month: "Feb",
      city: "London",
      temperature: 4.2
    },
    {
      month: "Mar",
      city: "Tokyo",
      temperature: 9.5
    },
    {
      month: "Mar",
      city: "London",
      temperature: 5.7
    },
    {
      month: "Apr",
      city: "Tokyo",
      temperature: 14.5
    },
    {
      month: "Apr",
      city: "London",
      temperature: 8.5
    },
    {
      month: "May",
      city: "Tokyo",
      temperature: 18.4
    },
    {
      month: "May",
      city: "London",
      temperature: 11.9
    },
    {
      month: "Jun",
      city: "Tokyo",
      temperature: 21.5
    },
    {
      month: "Jun",
      city: "London",
      temperature: 15.2
    },
    {
      month: "Jul",
      city: "Tokyo",
      temperature: 25.2
    },
    {
      month: "Jul",
      city: "London",
      temperature: 17
    },
    {
      month: "Aug",
      city: "Tokyo",
      temperature: 26.5
    },
    {
      month: "Aug",
      city: "London",
      temperature: 16.6
    },
    {
      month: "Sep",
      city: "Tokyo",
      temperature: 23.3
    },
    {
      month: "Sep",
      city: "London",
      temperature: 14.2
    },
    {
      month: "Oct",
      city: "Tokyo",
      temperature: 18.3
    },
    {
      month: "Oct",
      city: "London",
      temperature: 10.3
    },
    {
      month: "Nov",
      city: "Tokyo",
      temperature: 13.9
    },
    {
      month: "Nov",
      city: "London",
      temperature: 6.6
    },
    {
      month: "Dec",
      city: "Tokyo",
      temperature: 9.6
    },
    {
      month: "Dec",
      city: "London",
      temperature: 4.8
    }
  ],
  LineOptions: {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
  },
}

