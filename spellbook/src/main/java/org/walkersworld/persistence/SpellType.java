/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.walkersworld.persistence;

import java.io.Serializable;
import java.util.Set;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author cwalker
 */
@Entity
@Table(name = "spell_type", catalog = "Spellbook", schema = "")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "SpellType.findAll", query = "SELECT s FROM SpellType s"),
    @NamedQuery(name = "SpellType.findBySpellTypeId", query = "SELECT s FROM SpellType s WHERE s.spellTypeId = :spellTypeId"),
    @NamedQuery(name = "SpellType.findByDescription", query = "SELECT s FROM SpellType s WHERE s.description = :description")})
public class SpellType implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 25)
    @Column(name = "spell_type_id", nullable = false, length = 25)
    private String spellTypeId;
    @Size(max = 255)
    @Column(length = 255)
    private String description;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "spellType")
    private Set<Spell> spellSet;

    public SpellType() {
    }

    public SpellType(String spellTypeId) {
        this.spellTypeId = spellTypeId;
    }

    public String getSpellTypeId() {
        return spellTypeId;
    }

    public void setSpellTypeId(String spellTypeId) {
        this.spellTypeId = spellTypeId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @XmlTransient
    public Set<Spell> getSpellSet() {
        return spellSet;
    }

    public void setSpellSet(Set<Spell> spellSet) {
        this.spellSet = spellSet;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (spellTypeId != null ? spellTypeId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof SpellType)) {
            return false;
        }
        SpellType other = (SpellType) object;
        if ((this.spellTypeId == null && other.spellTypeId != null) || (this.spellTypeId != null && !this.spellTypeId.equals(other.spellTypeId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "org.walkersworld.persistence.SpellType[ spellTypeId=" + spellTypeId + " ]";
    }
    
}
