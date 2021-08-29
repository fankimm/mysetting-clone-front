// export default function Export(props){
//     let dataForJSON = {
//         profile: {
//           name: "jihwan",
//           email: "fankim@icloud.com",
//           account: "fankimm",
//           githubid: "fankimm",
//           twitterid: "none",
//         },
//         basic: {
//           job: "none",
//           company: "none",
//           location: "gunpo",
//           website: "none",
//         },
//         link: {
//           youtube: "none",
//           facebook: "none",
//           mastodon: "none",
//           twitch: "none",
//           instagram: "none",
//           dribbble: "none",
//           stackoverflow: "none",
//           gitlab: "none",
//           medium: "none",
//           behance: "none",
//           linkedin: "none",
//         },
//         stack: {
//           tech: ["python", "c++"],
//           study: ["react", "javascript"],
//         },
//         devEnv: {
//           os: ["macOS"],
//           computer: ["macbook", "macmini"],
//           monitor: ["none"],
//           mobile: ["iphone"],
//           keyboard: ["none"],
//           mouseAndTrackpad: ["magic mouse"],
//           camera: ["none"],
//           mic: ["none"],
//           earphone: ["air pod"],
//           deskAndChair: ["none"],
//           etc: ["none"],
//         },
//         experience: {
//           compnay: "dlab",
//           position: "developer",
//           link: "none",
//           start: "2021.01.20",
//           end: "2021.06.26",
//           description: "",
//         },
//         project: {
//           name: "",
//           position: "",
//           link: "",
//           start: "2021.01.20",
//           end: "2021.06.26",
//           description: "",
//         },
//         opensource: {
//           name: "",
//           intruduce: "",
//           link: "",
//           description: "",
//         },
//         education: {
//           position: "",
//           major: "",
//           start: "2021.01.20",
//           end: "2021.06.26",
//           description: "",
//         },
//         activity: {
//           name: "",
//           title: "",
//           link: "",
//           start: "2021.01.20",
//           end: "2021.06.26",
//           description: "",
//         },
//       };

//       function injection(){
//         // props.data[0]
//         dataForJSON.tech = props.data1[0]
//         dataForJSON.stack = props.data1[1]
//         dataForJSON.os = prop.data1[2]
//         console.log(dataForJSON)
//       }
//       return (<div>{injection()}</div>
//       )
// }