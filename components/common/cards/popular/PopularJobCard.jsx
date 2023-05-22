import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./popularjobcard.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  console.log(item)
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
        wow
      </Text>
      <View style={styles.jobName(selectedJob, item)}>
        <Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
